
using ChamadaEBD.BackEnd.Base.Context.EntityFrameworkContext;
using Microsoft.EntityFrameworkCore;

namespace ChamadaEBD.BackEnd
{
    public class RepositoryBase<TEntity> : IRepositoryBase<TEntity>
        where TEntity : class, IEntityBase
    {
        #region Fields
        private readonly EntityFrameworkContext _context;
        #endregion

        #region Constructor
        public RepositoryBase(EntityFrameworkContext context)
        {
            _context = context;
        }
        #endregion

        #region Members :: GetEntitiesAsync(), GetEntityByIdAsync(), GetQueryable()

        #region GetEntitiesAsync()
        public async Task<IEnumerable<TEntity>> GetEntitiesAsync()
        {
            return await _context.Set<TEntity>().AsNoTracking().ToListAsync();
        }
        #endregion

        #region GetEntityByIdAsync()
        public async Task<TEntity?> GetEntityByIdAsync(long id)
        {
            return await _context.Set<TEntity>().AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }
        #endregion

        #region GetQueryable()
        public IQueryable<TEntity> GetQueryable()
        {
            return _context.Set<TEntity>().AsQueryable();
        }
        #endregion

        #region SaveAsync()
        public TEntity Update(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            return entity;
        }
        #endregion

        #region UpdateAsync()
        public TEntity Save(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            return entity;
        }
        #endregion

        #region Delete()
        public void Delete(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
        }
        #endregion

        #endregion
    }
}
