import { IEntityBase } from "./base/i-entity-base";

export class User implements IEntityBase {
  id: number;
  code: number;
  name: string;
  age: string;
  phone: string;
  active: boolean;
}

export class Student implements IEntityBase {
  id: number;
  code: number;
  attendanceCount: number;
  absenceCount: number;
  attendacePercentage: number;
  description: string;
  userId: number;
  classRoomId: number;

  user: User;
  classRoom: ClassRoom
}

export class Teacher implements IEntityBase {
  id: number;
  code: number;
  attendanceCount: number;
  absenceCount: number;
  attendacePercentage: number;
  description: string;
  userId: number;
  classRoomId: number;

  user: User;
  classRoom: ClassRoom
}

export class StudentCheckin implements IEntityBase {
  id: number;
  code: number;
  dateTimeCheckin: Date;
  description: string;
  studentId: number;
  classRoomId: number;

  student: Student;
  classRoom: ClassRoom;
}

export class TeacherCheckin implements IEntityBase {
  id: number;
  code: number;
  dateTimeCheckin: Date;
  description: string;
  teacherId: number;
  classRoomId: number;

  teacher: Teacher;
  classRoom: ClassRoom;
}

export class ClassRoom implements IEntityBase {
  id: number;
  code: number;
  description: string;
  startHour: string;
  finishHour: string;
  StudentsCount: number;
  teachersCount: number;

  teachers: Teacher[];
  students: Student[];
}
