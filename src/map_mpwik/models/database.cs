using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace map_mpwik.models
{
    public partial class database:DbContext
    {
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseNpgsql("Host=kubrycht.com.pl;Username=tomasz;Password=P99qrhtm6r;Database=mpwik");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<wspol>(entity =>
            {
                entity.HasKey(e => e.nr_id).HasName("wspol_pkey");
                entity.ToTable("wspol");
                entity.Property(e => e.nr_id).HasColumnName("nr_id");
                entity.Property(e => e.adres).IsRequired().HasColumnName("adres").HasColumnType("varchar");
                entity.Property(e => e.imie).IsRequired().HasColumnName("imie").HasColumnType("varchar");
                entity.Property(e => e.lat).IsRequired().HasColumnName("lat").HasColumnType("varchar");
                entity.Property(e => e.longi).IsRequired().HasColumnName("long").HasColumnType("varchar");
            });
            modelBuilder.Entity<kligocode>(entity =>
            {
                entity.ToTable("pelne");
                entity.Property(e => e.nr_id).HasColumnName("nr_id");
                entity.Property(e => e.adres).HasColumnName("adres").HasColumnType("varchar");
                entity.Property(e => e.imie).HasColumnName("imie").HasColumnType("varchar");
                entity.Property(e => e.lat).HasColumnName("lat").HasColumnType("varchar");
                entity.Property(e => e.longi).HasColumnName("long").HasColumnType("varchar");
            });
            modelBuilder.Entity<puste>(entity =>
            {
                entity.ToTable("puste");
                entity.Property(e => e.nr_id).HasColumnName("nr_id");
                entity.Property(e => e.adres).HasColumnName("adres").HasColumnType("varchar");
                entity.Property(e => e.imie).HasColumnName("imie").HasColumnType("varchar");
                entity.Property(e => e.lat).HasColumnName("lat").HasColumnType("varchar");
                entity.Property(e => e.longi).HasColumnName("long").HasColumnType("varchar");

            });
            
        }
        public virtual DbSet<wspol> wspol { get; set; }
        public virtual DbSet<puste> puste { get; set; }
        public virtual DbSet<kligocode> kligocode { get; set; }
    }
}
