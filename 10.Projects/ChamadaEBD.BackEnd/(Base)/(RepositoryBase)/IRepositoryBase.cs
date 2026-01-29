namespace ChamadaEBD.BackEnd
{
    public interface IRepositoryBase<TEntity>
        where TEntity : class, IEntityBase
    {
        Task<IEnumerable<TEntity>> GetEntitiesAsync();
        Task<TEntity?> GetEntityByIdAsync(long id);
        Task<IEnumerable<TEntity>> GetEntitiesByIdsAsync(long[] id);
        IQueryable<TEntity> GetQueryable();
        TEntity Save(TEntity entity);
        IEnumerable<TEntity> SaveRange(IEnumerable<TEntity> entities);
        TEntity Update(TEntity entity);
        void Delete(TEntity entity);
        void DeleteRange(IEnumerable<TEntity> entities);
    }
}
