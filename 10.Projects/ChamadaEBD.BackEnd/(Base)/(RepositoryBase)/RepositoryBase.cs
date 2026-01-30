
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

        #region Members IRepositoryBase :: GetEntitiesAsync(), GetEntityByIdAsync(), GetEntitiesByIdsAsync() GetQueryable(), Update(), UpdateSave(), Save(), SaveRange(), Delete(), DeleteRange()

        #region GetEntitiesAsync()
        /// <summary>
        /// Retorna uma lista de entidades
        /// </summary>
        /// <returns>IEnumerable TEntity</returns>
        public async Task<IEnumerable<TEntity>> GetEntitiesAsync()
        {
            return await _context.Set<TEntity>().AsNoTracking().ToListAsync();
        }
        #endregion


        #region GetEntityByIdAsync()
        /// <summary>
        /// Retorna uma entidade existente
        /// </summary>
        /// <param name="id">Id da entidade</param>
        /// <returns>TEntity</returns>
        public async Task<TEntity?> GetEntityByIdAsync(long id)
        {
            return await _context.Set<TEntity>().AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }
        #endregion

        #region GetEntitiesByIdsAsync()
        /// <summary>
        /// Retorna uma lista de entidades existentes, filtradas pelo Id
        /// </summary>
        /// <param name="ids">Array que contém os ids da filtragem</param>
        /// <returns>IEnumerable TEntity</returns>
        public async Task<IEnumerable<TEntity>> GetEntitiesByIdsAsync(long[] ids)
        {
            return await _context.Set<TEntity>().Where(x => ids.Contains(x.Id)).AsNoTracking().ToListAsync();
        }

        #endregion

        #region GetQueryable()
        /// <summary>
        /// Retorna uma Queryable da tabela. Útil para fazer consultas customizadas
        /// </summary>
        /// <returns>IQueryable TEntity</returns>
        public IQueryable<TEntity> GetQueryable()
        {
            return _context.Set<TEntity>().AsQueryable();
        }
        #endregion

        #region Save()
        /// <summary>
        /// Salva uma entidade nova
        /// </summary>
        /// <param name="entity">Entidade</param>
        /// <returns>TEntity</returns>
        public TEntity Save(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            return entity;
        }
        #endregion

        #region SaveRange()
        /// <summary>
        /// Salva uma lista de entidades novas
        /// </summary>
        /// <param name="entities">Lista de entidades</param>
        /// <returns>TEntity</returns>
        public IEnumerable<TEntity> SaveRange(IEnumerable<TEntity> entities)
        {
            _context.Set<TEntity>().AddRange(entities);
            return entities;
        }
        #endregion

        #region Update()
        /// <summary>
        /// Atualiza uma entidade existente
        /// </summary>
        /// <param name="entity">Entidade</param>
        /// <returns>TEntity</returns>
        public TEntity Update(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            return entity;
        }
        #endregion

        #region UpdateRange()
        /// <summary>
        /// Atualiza uma lista de entidades existentes
        /// </summary>
        /// <param name="entities">Lista de entidades</param>
        /// <returns>IEnumerable TEntity</returns>
        public IEnumerable<TEntity> UpdateRange(IEnumerable<TEntity> entities)
        {
            _context.Set<TEntity>().UpdateRange(entities);
            return entities;
        }
        #endregion

        #region Delete()
        /// <summary>
        /// Deleta uma entidade existente
        /// </summary>
        /// <param name="entity">Entidade</param>
        public void Delete(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
        }
        #endregion

        #region DeleteRange()
        /// <summary>
        /// Deleta uma lista de entidades existentes
        /// </summary>
        /// <param name="entities">Lista de entidades</param>
        public void DeleteRange(IEnumerable<TEntity> entities)
        {
            _context.Set<TEntity>().RemoveRange(entities);
        }
        #endregion

        #endregion
    }
}
