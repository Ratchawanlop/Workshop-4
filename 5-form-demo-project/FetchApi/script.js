function fetchUserData() {
    // ดึงข้อมูลจาก Public API
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("เกิดข้อผิดพลาดในการดึงข้อมูล");
            }
            return response.json();
        })
        .then(data => {
            // ล้างข้อมูลก่อนหน้า
            const userList = document.getElementById('userList');
            userList.innerHTML = ''; // ล้างรายการก่อนหน้า

            // แสดงข้อมูลของผู้ใช้ทั้งหมด
            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>ชื่อ:</strong> ${user.name}, 
                    <strong>อีเมล:</strong> ${user.email}, 
                    <strong>ที่อยู่:</strong> ${user.address.street}, ${user.address.city}
                `;
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
}
