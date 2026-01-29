using Microsoft.EntityFrameworkCore;

namespace ChamadaEBD.BackEnd.Base.Context.EntityFrameworkContext
{
    public class EntityFrameworkContext : DbContext
    {

        public EntityFrameworkContext(DbContextOptions contextOptions): base (contextOptions)
        {
            
        }

        #region DbSets :: Users, Classes
        public DbSet<User> Users { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<UsersClasses> UsersClasses { get; set; }
        #endregion
    }
}
