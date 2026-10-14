## ARS HealthCare

**ARS HealthCare** is a full stack, robust and comprehensive healthcare management system designed to streamline communication and appointment processes between patients, doctors, and administrators. The system incorporates cutting-edge technologies to ensure efficient and secure healthcare delivery.

---

```
Health_Care_Server
├─ .env
├─ .npmrc
├─ .vercelignore
├─ healthcareNote.txt
├─ health_care_inserts.sql
├─ package-lock.json
├─ package.json
├─ prisma
│  ├─ schema.prisma
│  └─ seed.ts
├─ README.md
├─ resources
│  ├─ HealthCare.postman_collection.json
│  ├─ PH HealthCare - Web Application Requirements.pdf
│  └─ PH HealthCare ERD.pdf
├─ src
│  ├─ app
│  │  ├─ errors
│  │  │  └─ ApiError.ts
│  │  ├─ interfaces
│  │  │  ├─ common.ts
│  │  │  ├─ file.ts
│  │  │  └─ pagination.ts
│  │  ├─ middlewares
│  │  │  ├─ auth.ts
│  │  │  ├─ globalErrorHandler.ts
│  │  │  └─ validateRequest.ts
│  │  ├─ modules
│  │  │  ├─ Admin
│  │  │  │  ├─ admin.constant.ts
│  │  │  │  ├─ admin.controller.ts
│  │  │  │  ├─ admin.interface.ts
│  │  │  │  ├─ admin.routes.ts
│  │  │  │  ├─ admin.service.ts
│  │  │  │  └─ admin.validations.ts
│  │  │  ├─ Appointment
│  │  │  │  ├─ appointment.constant.ts
│  │  │  │  ├─ appointment.controller.ts
│  │  │  │  ├─ appointment.routes.ts
│  │  │  │  ├─ appointment.service.ts
│  │  │  │  └─ appointment.validation.ts
│  │  │  ├─ Auth
│  │  │  │  ├─ auth.controller.ts
│  │  │  │  ├─ auth.routes.ts
│  │  │  │  ├─ auth.service.ts
│  │  │  │  └─ emailSender.ts
│  │  │  ├─ Doctor
│  │  │  │  ├─ doctor.constants.ts
│  │  │  │  ├─ doctor.controller.ts
│  │  │  │  ├─ doctor.interface.ts
│  │  │  │  ├─ doctor.routes.ts
│  │  │  │  ├─ doctor.service.ts
│  │  │  │  └─ doctor.validation.ts
│  │  │  ├─ DoctorSchedule
│  │  │  │  ├─ doctorSchedule.constants.ts
│  │  │  │  ├─ doctorSchedule.controller.ts
│  │  │  │  ├─ doctorSchedule.interface.ts
│  │  │  │  ├─ doctorSchedule.routes.ts
│  │  │  │  ├─ doctorSchedule.service.ts
│  │  │  │  └─ doctorSchedule.validation.ts
│  │  │  ├─ Meta
│  │  │  │  ├─ meta.controller.ts
│  │  │  │  ├─ meta.routes.ts
│  │  │  │  └─ meta.service.ts
│  │  │  ├─ Patient
│  │  │  │  ├─ patient.constants.ts
│  │  │  │  ├─ patient.controller.ts
│  │  │  │  ├─ patient.interface.ts
│  │  │  │  ├─ patient.route.ts
│  │  │  │  ├─ patient.services.ts
│  │  │  │  └─ patient.validation.ts
│  │  │  ├─ Payment
│  │  │  │  ├─ payment.controller.ts
│  │  │  │  ├─ payment.routes.ts
│  │  │  │  └─ payment.service.ts
│  │  │  ├─ Prescription
│  │  │  │  ├─ prescription.constants.ts
│  │  │  │  ├─ prescription.controller.ts
│  │  │  │  ├─ prescription.routes.ts
│  │  │  │  ├─ prescription.service.ts
│  │  │  │  └─ prescription.validation.ts
│  │  │  ├─ Review
│  │  │  │  ├─ review.contant.ts
│  │  │  │  ├─ review.controller.ts
│  │  │  │  ├─ review.routes.ts
│  │  │  │  ├─ review.service.ts
│  │  │  │  └─ review.validation.ts
│  │  │  ├─ Schedule
│  │  │  │  ├─ schedule.controller.ts
│  │  │  │  ├─ schedule.interface.ts
│  │  │  │  ├─ schedule.routes.ts
│  │  │  │  └─ schedule.sevice.ts
│  │  │  ├─ Specialties
│  │  │  │  ├─ specialties.controller.ts
│  │  │  │  ├─ specialties.routes.ts
│  │  │  │  ├─ specialties.service.ts
│  │  │  │  └─ specialties.validation.ts
│  │  │  ├─ SSL
│  │  │  │  ├─ ssl.interface.ts
│  │  │  │  └─ ssl.service.ts
│  │  │  └─ User
│  │  │     ├─ user.constant.ts
│  │  │     ├─ user.controller.ts
│  │  │     ├─ user.routes.ts
│  │  │     ├─ user.service.ts
│  │  │     └─ user.validation.ts
│  │  └─ routes
│  │     └─ index.ts
│  ├─ app.ts
│  ├─ config
│  │  └─ index.ts
│  ├─ helpars
│  │  ├─ fileUploader.ts
│  │  ├─ jwtHelpers.ts
│  │  └─ paginationHelper.ts
│  ├─ server.ts
│  └─ shared
│     ├─ catchAsync.ts
│     ├─ pick.ts
│     ├─ prisma.ts
│     └─ sendResponse.ts
├─ tsconfig.json
├─ uploads
└─ vercel.json

```
run server:  npx ts-node-dev --respawn --transpile-only src/server.ts
