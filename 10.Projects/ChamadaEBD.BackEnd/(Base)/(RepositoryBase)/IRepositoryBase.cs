namespace ChamadaEBD.BackEnd
{
    public interface IRepositoryBase<TEntity>
        where TEntity : class, IEntityBase
    {
        #region Members :: GetEntitiesAsync(), GetEntityByIdAsync(), GetEntitiesByIds(), GetQueryable(), Save(), SaveRange, Update(), UpdateRange(), Delete(), DeleteRange()
        Task<IEnumerable<TEntity>> GetEntitiesAsync();
        Task<TEntity?> GetEntityByIdAsync(long id);
        Task<IEnumerable<TEntity>> GetEntitiesByIdsAsync(long[] id);
        IQueryable<TEntity> GetQueryable();
        TEntity Save(TEntity entity);
        IEnumerable<TEntity> SaveRange(IEnumerable<TEntity> entities);
        TEntity Update(TEntity entity);
        IEnumerable<TEntity> UpdateRange(IEnumerable<TEntity> entities);
        void Delete(TEntity entity);
        void DeleteRange(IEnumerable<TEntity> entities);
        #endregion
    }
}
