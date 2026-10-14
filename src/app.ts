// here we put all middleware
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import cron from "node-cron";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { AppointmentService } from "./app/modules/Appointment/appointment.service";
import router from "./app/routes";

// this error happens because:
// On frontend, you’re using credentials: "include" → correct.
// On backend, you used app.use(cors()), which sets Access-Control-Allow-Origin: *. That’s not allowed when sending credentials.

// ******solution******
// app.use(cors({
//   origin: "http://localhost:3000", when working in local server
//   credentials: true,
// }));

const app: Application = express();

const whiteList = ["http://localhost:3000", process.env.FRONTEND_URL as string];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whiteList.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// checking server: প্রতি ১ মিনিটে একবার করে সার্ভার চেক করছে—"কারও পেমেন্ট বাকি আছে কি? থাকলে ক্যান্সেল করো।

// customize: ক্রন জবের সময় পরিবর্তন করা খুবই সহজ। এটি মূলত ৫টি স্টারের একটি ফরম্যাট মেনে চলে: * * * * * (মিনিট, ঘণ্টা, দিন, মাস, সপ্তাহ)।
// কোডে cron.schedule এর ভেতরের অংশটুকু এভাবে পরিবর্তন:
// ২ ঘণ্টা পর পর রান করতে:
// cron.schedule("0 */2 * * *", () => {
//   // আপনার কোড
// });

// ফরম্যাট:
// * * * * * (মিনিট, ঘণ্টা, দিন, মাস, সপ্তাহ)।
// 0: মানে হচ্ছে একদম শুরুর মিনিটে।
// */2: মানে প্রতি ২ ঘণ্টা পর পর (Divide by 2)।
// বাকি *: মানে প্রতিদিন, প্রতি মাস, প্রতি সপ্তাহে।

cron.schedule("* * * * *", () => {
  try {
    AppointmentService.cancelUnpaidAppointments();
  } catch (err) {
    console.error(err);
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "health care server",
  });
});

//*** main module routes ***/
// http://localhost:5000//api/v1/(others)
app.use("/api/v1", router);

app.use(globalErrorHandler);

// api not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND!",
    error: {
      path: req.originalUrl,
      message: "Your requested path is not found!",
    },
  });
});

export default app;
