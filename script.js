document.getElementById('courseRegistrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const id = document.getElementById('studentId').value;
    const email = document.getElementById('email').value;
    const dept = document.getElementById('department').value;
    const courses = Array.from(document.querySelectorAll('input[name="courses"]:checked')).map(el => el.value);

    let output = `<p><strong>Name:</strong> ${name}</p>`;
    output += `<p><strong>Student ID:</strong> ${id}</p>`;
    output += `<p><strong>Email:</strong> ${email}</p>`;
    output += `<p><strong>Department:</strong> ${dept}</p>`;
    output += `<p><strong>Courses Registered:</strong> ${courses.join(', ') || 'None'}</p>`;

    document.getElementById('output').innerHTML = output;
  });