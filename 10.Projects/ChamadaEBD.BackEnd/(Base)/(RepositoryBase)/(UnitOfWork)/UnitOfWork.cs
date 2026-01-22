
using ChamadaEBD.BackEnd.Base.Context.EntityFrameworkContext;
using System.Collections.Concurrent;

namespace ChamadaEBD.BackEnd._Base_._RepositoryBase_._UnitOfWork_
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        #region Fields
        private readonly EntityFrameworkContext _context;
        private readonly ConcurrentDictionary<Type, object> repository = new();
        #endregion

        #region Constructor
        public UnitOfWork(EntityFrameworkContext context)
        {
            _context = context;
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
                _ => new RepositoryBase<TEntity>(_context)
            );
        }
    }
}
