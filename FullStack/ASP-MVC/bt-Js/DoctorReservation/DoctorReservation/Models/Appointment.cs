namespace DoctorReservation.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Appointment
    {
        public int Id { get; set; }

        public int DoctorId { get; set; }
        public Doctor? Doctor { get; set; } // Nullable to avoid constructor warnings

        public int PatientId { get; set; }
        public Patient? Patient { get; set; } // Nullable

        [Required]
        public DateTime StartAt { get; set; }

        [Required]
        public int DurationMinutes { get; set; } = 30;

        public DateTime EndAt => StartAt.AddMinutes(DurationMinutes);

        [StringLength(500)]
        public string? Notes { get; set; } // Nullable so it can be left empty

        // Status (Booked, Cancelled, Completed)
        public AppointmentStatus Status { get; set; } = AppointmentStatus.Booked;
    }

    public enum AppointmentStatus
    {
        Booked,
        Cancelled,
        Completed
    }
}
