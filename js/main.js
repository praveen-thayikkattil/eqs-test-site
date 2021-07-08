window.onload = () => {
    /* Main navigation */
    (() => {
        let activeState = false;

        let navOpenButton = document.getElementById('nav-open');
        let navDrawer = document.getElementById('main-navigation');

        navOpenButton.addEventListener('click', e => {
            navDrawer.classList.toggle('nav-active');
            navOpenButton.classList.toggle('nav-active');
        });
    })();

    /* JSON data based table */
    (() => {
        const button = document.getElementById('json-show-info');
        const table = document.getElementById('json-table');
        const thead = table.querySelector('thead');
        const tbody = table.querySelector('tbody');

        button.addEventListener('click', (e) => {
            const empData = require('../empdetails.json');

            // thead.style.display = 'block';
            
            // Is inactive
            if (button.innerHTML === "Show Information") {
                button.innerHTML = "Hide Information";
                table.style.display = 'table';
                thead.style.display = "table-header-group";

                // Is active
            } else {
                button.innerHTML = "Show Information";
                table.style.display = 'none';
            }
            

            empData.jsonstr.map((employee, index) => {
                const contactDetails = `<ul class="contact-details-list">
                                            <li><strong>Email:</strong> ${employee.ContactDetails[0].Email}</li>
                                            <li><strong>Phone number:</strong> ${employee.ContactDetails[0].PhoneNumber}</li>
                                            <li><strong>Fax:</strong> ${employee.ContactDetails[0].Fax}</li>
                                            <li><strong>Address:</strong> ${employee.ContactDetails[0].Address}</li>
                                        </ul>`;
                const companyDetails =  `<ul class="company-details-list">
                                            <li><strong>Company name: </strong>${employee.Company[0].CompanyName}</li>
                                            <li><strong>Is current compamy</strong>${employee.Company[0].IsCurrentCompany}</li>
                                            <li<strong>Year of experience</strong>${employee.Company[0].YearOfExperience}</li>
                                            <li><strong>Location</strong>${employee.Company[0].Location}</li>
                                            <li><strong>Total year of experience.......//////////////÷/////////////////////////////////////////////////////////////////////////////;</strong>${employee.Company[0].IsCurrentCompany}</li>
                                        </ul>`;

                let rowElementText = `<td>${employee.ID}</td>
                                      <td>${employee.Name}</td>
                                      <td>${employee.LastName}</td>
                                      <td>${employee.Age}</td>
                                      <td>${contactDetails}</td>
                                      <td>${companyDetails}</td>`;
                
                tbody.insertAdjacentHTML('beforeend', rowElementText)
            });
        });
    })();

    (() => {
        const scrollTopButton = document.getElementById('scroll-top-button');

        scrollTopButton.addEventListener('click', e => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        })
    })();
}
