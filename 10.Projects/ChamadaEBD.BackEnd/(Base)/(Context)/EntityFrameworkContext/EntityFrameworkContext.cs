using Microsoft.EntityFrameworkCore;

namespace ChamadaEBD.BackEnd.Base.Context.EntityFrameworkContext
{
    public class EntityFrameworkContext : DbContext
    {

        public EntityFrameworkContext(DbContextOptions contextOptions): base (contextOptions)
        {
            
        }

        #region DbSets :: Users, Students, Teachers, StudentChekins, TeacherChekins, ClassRooms
        public DbSet<User> Users { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<StudentCheckin> StudentCheckins { get; set; }
        public DbSet<TeacherCheckin> TeacherCheckins { get; set; }
        public DbSet<ClassRoom> ClassRooms { get; set; }
        #endregion
    }
}
