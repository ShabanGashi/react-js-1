import "./CourseCard.css";

 function CourseCard({ title, instructor, lessons }) {
    return (
        <div className="course">
            <h3>{title}</h3>
            <p>Instructor: {instructor}</p>
            <p>Lessons: {lessons}</p>
        </div>
    );
}

export default CourseCard