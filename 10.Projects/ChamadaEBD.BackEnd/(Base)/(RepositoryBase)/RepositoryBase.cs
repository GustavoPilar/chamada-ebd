
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

        #region Members :: GetEntitiesAsync(), GetEntityByIdAsync(), GetEntitiesByIdsAsync() GetQueryable(), Update(), SaveRange(), Delete(), DeleteRange()

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

        #region GetEntitiesByIdsAsync()
        public async Task<IEnumerable<TEntity>> GetEntitiesByIdsAsync(long[] ids)
        {
            return await _context.Set<TEntity>().Where(x => ids.Contains(x.Id)).AsNoTracking().ToListAsync();
        }

        #endregion

        #region GetQueryable()
        public IQueryable<TEntity> GetQueryable()
        {
            return _context.Set<TEntity>().AsQueryable();
        }
        #endregion

        #region Update()
        public TEntity Update(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            return entity;
        }
        #endregion

        #region SaveRange
        public IEnumerable<TEntity> SaveRange(IEnumerable<TEntity> entities)
        {
            _context.Set<TEntity>().AddRange(entities);
            return entities;
        }
        #endregion

        #region Save()
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

        #region DeleteRange()
        public void DeleteRange(IEnumerable<TEntity> entities)
        {
            _context.Set<TEntity>().RemoveRange(entities);
        }
        #endregion

        #endregion
    }
}
