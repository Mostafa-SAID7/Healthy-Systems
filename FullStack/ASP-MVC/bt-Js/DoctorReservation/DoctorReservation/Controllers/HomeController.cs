using System.Diagnostics;
using DoctorReservation.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DoctorReservation.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _context;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            // Get all doctors from DB (with optional availability)
            var doctors = _context.Doctors
                .Include(d => d.Availabilities)
                .ToList();

            return View(doctors);
        }

        public IActionResult BookAppointment(int id)
        {
            // Get doctor by ID
            var doctor = _context.Doctors
                .Include(d => d.Availabilities)
                .FirstOrDefault(d => d.Id == id);

            if (doctor == null)
            {
                return NotFound();
            }

            return View(doctor);
        }

        public IActionResult CompleteAppointment()
        {
            return View();
        }

        public IActionResult ReservationsManagement()
        {
            // Example: Get all appointments
            var appointments = _context.Appointments
                .Include(a => a.Doctor)
                .Include(a => a.Patient)
                .ToList();

            return View(appointments);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel
            {
                RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
            });
        }
    }
}
