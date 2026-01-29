using AutoMapper;
using ChamadaEBD.BackEnd.Base.Context.EntityFrameworkContext;
using System.ComponentModel.DataAnnotations;

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
        public string? Description { get; set; }
        #endregion

        #region Fields :: Name, Age, Phone, AttendanceCount, AbsenceCount, AttendanceFrenquency, Active, RegisterDateTime
        public string? Name { get; set; }
        public int Age { get; set; }
        public string? Phone { get; set; }
        public int AttendanceCount { get; set; }
        public int AbsenceCount { get; set; }
        public int AttendanceFrequency { get; set; }
        public bool Active { get; set; }
        public DateTime RegisterDateTime { get; set; }
        #endregion
    }

    public partial class UserRepository : RepositoryBase<User>
    {
        public UserRepository(EntityFrameworkContext context) : base(context)
        {
            
        }
    }

    #endregion

    #region ClassRoom :: ClassRoomMapping, ClassRoomDTO, ClassRoomRepository
    public class ClassMapping : Profile
    {
        public ClassMapping()
        {
            CreateMap<Class, ClassDTO>().ReverseMap();
        }
    }

    public class ClassDTO : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
        #endregion

        #region Fields :: Description, StartHour, StartFinish, StudentsCount, TeachersCount
        public TimeOnly StartHour { get; set; }
        public TimeOnly StartFinish { get; set; }
        public int StudentsCount { get; set; }
        public int TeachersCount { get; set; }
        public bool Active { get; set; }
        #endregion
    }

    public partial class ClassRepository : RepositoryBase<Class>
    {
        public ClassRepository(EntityFrameworkContext context) : base(context)
        {
        }
    }
    #endregion

    #region :: UsersClassesMapping, UsersClassesDTO, UsersClasses
    public class UsersClassesMapping : Profile
    {
        public UsersClassesMapping()
        {
            CreateMap<UsersClasses, UsersClassesDTO>().ReverseMap();
        }
    }

    public class UsersClassesDTO : IEntityBase
    {
        #region Fields
        public long Id { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
        #endregion

        #region Fields
        public long ClassId { get; set; }
        public long UserId { get; set; }
        public bool IsTeacher { get; set; }
        #endregion
    }

    public partial class UsersClassesRepository : RepositoryBase<UsersClasses>
    {
        public UsersClassesRepository(EntityFrameworkContext context) : base(context)
        {
            
        }
    }
    #endregion
}
