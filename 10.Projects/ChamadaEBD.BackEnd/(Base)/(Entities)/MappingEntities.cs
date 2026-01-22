using AutoMapper;
using ChamadaEBD.BackEnd.Base.Context.EntityFrameworkContext;

namespace ChamadaEBD.BackEnd
{
    #region User :: UserMapping, UserDTO, UserRepository
    public class UserMapping : Profile
    {
        public UserMapping()
        {
            CreateMap<User, UserDTO>().ReverseMap();
        }
    }

    public class UserDTO : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: Name, Age, Phone, Active
        public string? Name { get; set; }
        public int Age { get; set; }
        public string? Phone { get; set; }
        public bool Active { get; set; }
        #endregion
    }

    public partial class UserRepository : RepositoryBase<User>
    {
        public UserRepository(EntityFrameworkContext context) : base(context)
        {
            
        }
    }

    #endregion

    #region Student :: StudentMapping, StudentDTO, StudentRepository
    public class StudentMapping : Profile
    {
        public StudentMapping()
        {
            CreateMap<Student, StudentDTO>().ReverseMap();
        }
    }

    public class StudentDTO : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: AttendanceCount, AbsenceCount, AttendancePercentage, Description, UserId, ClassRoomId
        public int AttendanceCount { get; set; }
        public int AbsenceCount { get; set; }
        public int AttendancePercentage { get; set; }
        public string? Description { get; set; }
        public long UserId { get; set; }
        public long ClassRoomId { get; set; }
        #endregion
    }

    public partial class StudentRepository : RepositoryBase<Student>
    {
        public StudentRepository(EntityFrameworkContext context) : base (context)
        {
        }
    }
    #endregion

    #region Teacher :: TeacherMapping, TeacherDTO, TeacherRepository
    public class TeacherMapping : Profile
    {
        public TeacherMapping()
        {
            CreateMap<Teacher, TeacherDTO>().ReverseMap();
        }
    }

    public class TeacherDTO : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: attendanceCount, AbsenceCount, AttendancePercentage, Description, UserId, ClassRoomId
        public int attendanceCount { get; set; }
        public int AbsenceCount { get; set; }
        public int AttendancePercentage { get; set; }
        public string? Description { get; set; }
        public long UserId { get; set; }
        public long ClassRoomId { get; set; }
        #endregion
    }

    public partial class TeacherRepository : RepositoryBase<Teacher>
    {
        public TeacherRepository(EntityFrameworkContext context) : base(context)
        {
        }
    }
    #endregion

    #region StudentCheckin :: StudentCheckinMapping, StudentCheckinDTO, StudentCheckinRepository
    public class StudentCheckinMapping : Profile
    {
        public StudentCheckinMapping()
        {
            CreateMap<StudentCheckin, StudentCheckinDTO>().ReverseMap();
        }
    }

    public class StudentCheckinDTO : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: DateTimeChekin, Description, StudentId, ClassRoomId
        public DateTime DateTimeChekin { get; set; }
        public string? Description { get; set; }
        public long StudentId { get; set; }
        public long ClassRoomId { get; set; }
        #endregion
    }

    public partial class StudentCheckinRepository : RepositoryBase<StudentCheckin>
    {
        public StudentCheckinRepository(EntityFrameworkContext context) : base(context)
        {
        }
    }
    #endregion

    #region TeacherCheckin :: TeacherCheckinMapping, TeacherCheckinDTO, TeacherCheckinRepository
    public class TeacherCheckinMapping : Profile
    {
        public TeacherCheckinMapping()
        {
            CreateMap<TeacherCheckin, TeacherCheckinDTO>().ReverseMap();
        }
    }

    public class TeacherCheckinDTO : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: DateTimeChekin, Description, HasClass, TeacherId, ClassRoomId
        public DateTime DateTimeChekin { get; set; }
        public string? Description { get; set; }
        public bool HasClass { get; set; }
        public long TeacherId { get; set; }
        public long ClassRoomId { get; set; }
        #endregion
    }

    public partial class TeacherCheckinRepository : RepositoryBase<TeacherCheckin>
    {
        public TeacherCheckinRepository(EntityFrameworkContext context) : base(context)
        {
        }
    }
    #endregion

    #region ClassRoom :: ClassRoomMapping, ClassRoomDTO, ClassRoomRepository
    public class ClassRoomMapping : Profile
    {
        public ClassRoomMapping()
        {
            CreateMap<ClassRoom, ClassRoomDTO>().ReverseMap();
        }
    }

    public class ClassRoomDTO : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: Description, StartHour, StartFinish, StudentsCount, TeachersCount
        public string? Description { get; set; }
        public TimeOnly StartHour { get; set; }
        public TimeOnly StartFinish { get; set; }
        public int StudentsCount { get; set; }
        public int TeachersCount { get; set; }
        public bool Active { get; set; }
        #endregion
    }

    public partial class ClassRoomRepository : RepositoryBase<ClassRoom>
    {
        public ClassRoomRepository(EntityFrameworkContext context) : base(context)
        {
        }
    }
    #endregion
}
