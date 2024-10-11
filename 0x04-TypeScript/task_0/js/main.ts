interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Albert',
    lastName: 'Clinton',
    location: 'San Francisco',
    age:30,
}

const student2: Student = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'New York',
    age: 25,
}

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
    const table = document.createElement('table');
    table.id = 'studentTable';
  
    const headerRow = document.createElement('tr');
    const firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';
    headerRow.appendChild(firstNameHeader);
  
    const locationHeader = document.createElement('th');
    locationHeader.textContent = 'Location';
    headerRow.appendChild(locationHeader);
  
    table.appendChild(headerRow);
  
    studentsList.forEach((student) => {
      const row = document.createElement('tr');
  
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);
  
      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      row.appendChild(locationCell);

      table.appendChild(row);
    });
  
    document.body.appendChild(table);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderTable();
  });