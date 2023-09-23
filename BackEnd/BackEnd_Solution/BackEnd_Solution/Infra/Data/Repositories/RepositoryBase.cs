using BackEnd_Solution.Context;
using BackEnd_Solution.Domain;
using Microsoft.EntityFrameworkCore;

namespace BackEnd_Solution.Infra.Data.Repositories
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        public readonly DbSet<T> _DbSet;
        public readonly DataBaseContext _context;

        public RepositoryBase(DataBaseContext context)
        {
            _DbSet = context.Set<T>();
            _context = context;
        }

        public async Task Create(T entity)
        {
            await _DbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(T entity)
        {
            _DbSet.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<List<T>> GetAll()
        {
            var query = _DbSet.AsQueryable();
            return await query.ToListAsync();
        }

        public async Task<T> GetById(int id)
        {
            return await _DbSet.FindAsync(id);
        }

        public async Task Update(T entity)
        {
            _DbSet.Update(entity);
            await _context.SaveChangesAsync();
        }
    }
}
