
using ChamadaEBD.BackEnd.Base.Context.EntityFrameworkContext;
using System.Collections.Concurrent;

namespace ChamadaEBD.BackEnd._Base_._RepositoryBase_._UnitOfWork_
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        #region Fields
        private readonly EntityFrameworkContext _context;
        private readonly IServiceProvider _serviceProvider;
        private readonly ConcurrentDictionary<Type, object> repository = new();
        #endregion

        #region Constructor
        public UnitOfWork(EntityFrameworkContext context, IServiceProvider serviceProvider)
        {
            _context = context;
            _serviceProvider = serviceProvider;
        }
        #endregion


        public async Task CommitAsync()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IRepositoryBase<TEntity> GetRepository<TEntity>() where TEntity : class, IEntityBase
        {
            return (IRepositoryBase<TEntity>)repository.GetOrAdd(
                typeof(TEntity),
                _ = new RepositoryBase<TEntity>(_context)
            );
        }
    }
}
