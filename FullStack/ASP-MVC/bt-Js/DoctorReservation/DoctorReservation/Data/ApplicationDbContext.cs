using System.IO;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using DoctorReservation.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) { }

    public DbSet<Doctor> Doctors { get; set; }
    public DbSet<Patient> Patients { get; set; }
    public DbSet<DoctorAvailability> DoctorAvailabilities { get; set; }
    public DbSet<Appointment> Appointments { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Path to JSON file
        var jsonPath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "doctors.json");

        if (File.Exists(jsonPath))
        {
            var jsonData = File.ReadAllText(jsonPath);
            var doctors = JsonSerializer.Deserialize<List<Doctor>>(jsonData);

            if (doctors != null)
            {
                modelBuilder.Entity<Doctor>().HasData(doctors);
            }
        }

        base.OnModelCreating(modelBuilder);
    }
}
