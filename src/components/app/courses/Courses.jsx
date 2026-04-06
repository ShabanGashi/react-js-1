import "./Courses.css";
import CourseCard from "./CourseCard";

const courses = [
    { title: "HTML & CSS Basics", instructor: "Sara Lee", lessons: 12 },
    { title: "JavaScript for Beginners", instructor: "John Miller", lessons: 18 },
    { title: "React Fundamentals", instructor: "Emily Carter", lessons: 15 },
    { title: "Node.js & Express", instructor: "David Park", lessons: 20 },
];

function Courses() {
    return (
        <div className="card">
            <h2>Available Courses</h2>
            <p>Rendered with map() — each card is a CourseCard component.</p>

            <div className="grid">
                {courses.map((course, i) => (
                    <CourseCard key={i} {...course} />
                ))}
            </div>
        </div>
    );
}

export default Courses