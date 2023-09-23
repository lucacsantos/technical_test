using BackEnd_Solution.Domain;
using Microsoft.EntityFrameworkCore;

namespace BackEnd_Solution.Context
{
    public class DataBaseContext: DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options)
        {
        }

        public DbSet<Escolaridade> Escolaridade { get; set; }
        public DbSet<Escolaridade> Usuario { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Escolaridade>().HasKey(e => e.IdEscolaridade);
            builder.Entity<Usuario>().HasKey(u => u.IdUsuario);
        }

    }
}
