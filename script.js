 /* Bölme 1 Başlangıç */
        // DOM elementlerini seç
        const taskInput = document.getElementById("task");
        const addTaskButton = document.getElementById("addTask");
        const taskList = document.getElementById("taskList");

        // Yeni bir görev eklemek için işlev
        function addTask() {
          const taskText = taskInput.value.trim();
          if (taskText === "") {
            alert("Lütfen bir görev girin.");
            return;
          }

          // Yeni bir <li> öğesi oluştur
          const taskItem = document.createElement("li");
          taskItem.textContent = taskText;

          // Görevi listeye ekle
          taskList.appendChild(taskItem);

          // Görevi temizle
          taskInput.value = "";

          // Göreve tıklama işlevi ekle (tamamlandı işaretleme)
          taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
          });

          // Görevi silme işlevi ekle
          taskItem.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            taskItem.remove();
          });
        }

        // Görev ekleme düğmesine tıklanınca addTask işlevini çağır
        addTaskButton.addEventListener("click", addTask);

        // Enter tuşuna basıldığında addTask işlevini çağır
        taskInput.addEventListener("keyup", (e) => {
          if (e.key === "Enter") {
            addTask();
          }
        });
        /*Bölüm1 bitti*/

        /*Bölme 2 Başlangıç */
        function addToDisplay(value) {
          document.getElementById("display").value += value;
        }

        function clearDisplay() {
          document.getElementById("display").value = "";
        }

        function calculate() {
          try {
            document.getElementById("display").value = eval(
              document.getElementById("display").value
            );
          } catch (error) {
            document.getElementById("display").value = "Hata";
          }
        }
        /* Bölüm 2 bitti*/

        /*Bölme 3 Başlangıç */
        const calendar = document.getElementById("calendar");

        function generateCalendar(year, month) {
          const firstDay = new Date(year, month, 1);
          const lastDay = new Date(year, month + 1, 0);
          const daysInMonth = lastDay.getDate();

          const monthName = new Intl.DateTimeFormat("en-US", {
            month: "long",
          }).format(firstDay);
          const yearMonthHeader = `<h2>${monthName} ${year}</h2>`;

          let calendarHTML = "<table>";
          calendarHTML +=
            "<tr><th>Paz</th><th>Pzt</th><th>Sal</th><th>Çar</th><th>Per</th><th>Cum</th><th>Cmt</th></tr>";
          calendarHTML += "<tr>";

          // Boş günler
          for (let i = 0; i < firstDay.getDay(); i++) {
            calendarHTML += "<td></td>";
          }

          // Takvim günleri
          for (let day = 1; day <= daysInMonth; day++) {
            calendarHTML += `<td>${day}</td>`;

            if (new Date(year, month, day).getDay() === 0) {
              calendarHTML += "</tr><tr>";
            }
          }

          calendarHTML += "</tr>";
          calendarHTML += "</table>";

          calendar.innerHTML = yearMonthHeader + calendarHTML;
        }

        const currentDate = new Date();
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
        /*bölüm3 bitti*/

        /*Bölme 4 Başlangıç */
        let kelimeler = [];

        function sirala() {
          const kelimeInput = document.getElementById("kelimeInput");
          const kelime = kelimeInput.value.trim();

          if (kelime !== "") {
            kelimeler.push(kelime);
            kelimeler.sort(); // Alfabetik sıralama
            kelimeInput.value = ""; // Input'u temizle

            guncelleSonuc();
          }
        }

        function guncelleSonuc() {
          const sonucDiv = document.getElementById("sonuc");
          sonucDiv.innerHTML = "<h2>Alfabetik Sıralı Kelimeler</h2><ul>";

          for (let i = 0; i < kelimeler.length; i++) {
            sonucDiv.innerHTML += `<li>${kelimeler[i]}</li>`;
          }

          sonucDiv.innerHTML += "</ul>";
        }
        
        /*bölüm4 bitti*/

        /* Bölme 5 Başlangıç */
        function updateClock() {
          const clockElement = document.getElementById("clock");
          const now = new Date();

          const hours = now.getHours().toString().padStart(2, "0");
          const minutes = now.getMinutes().toString().padStart(2, "0");
          const seconds = now.getSeconds().toString().padStart(2, "0");

          const timeString = `${hours}:${minutes}:${seconds}`;
          clockElement.textContent = timeString;
        }

        // Saati başlat
        updateClock();
        setInterval(updateClock, 1000); // Her saniye güncelle
        /*Bölüm 5 bitti*/

        /*Bölme 6 Başlangıç */
        const button = document.getElementById("changeColorButton");

        // Arka plan rengini değiştiren bir işlev
        function changeBackgroundColor() {
          // Rastgele bir renk oluşturmak için Math.random kullanabilirsiniz
          const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);

          // Arka plan rengini değiştir
          document.body.style.backgroundColor = randomColor;
        }

        // Düğmeye tıklanınca rengi değiştir
        button.addEventListener("click", changeBackgroundColor);
        
        /*Bölüm 6 bitti*/