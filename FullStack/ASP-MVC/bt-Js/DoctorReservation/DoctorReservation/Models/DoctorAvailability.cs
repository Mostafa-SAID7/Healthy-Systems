namespace DoctorReservation.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class DoctorAvailability
    {
        public int Id { get; set; }

        public int DoctorId { get; set; }

        // Navigation property to Doctor
        public Doctor? Doctor { get; set; }  // Nullable to avoid constructor warnings

        // Available date/time range
        [Required]
        public DateTime From { get; set; }

        [Required]
        public DateTime To { get; set; }
    }
}
