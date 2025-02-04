import '../style/Home.css';
import '../style/Order.css';

function Order() {
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const sanitizeInput = (input) => {
        const element = document.createElement('div');
        element.innerText = input;
        return element.innerHTML;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = sanitizeInput(event.target.email.value);
        const name = sanitizeInput(event.target.name.value);
        const countryCode = sanitizeInput(event.target.countryCode.value);
        const phone = countryCode + sanitizeInput(event.target.phone.value);
        const types = Array.from(event.target.types.selectedOptions).map(option => sanitizeInput(option.value));

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        console.log({ email, name, phone, types });

        // Process sanitized inputs
        alert("Form submitted!");
    };
    return (
      <div className="Order">
        <header className="App-header">
          <div id="order">
            <h1>Passer une commande</h1>
            <h3>
                Place an order
                <br/>
                주문하기
            </h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <select id="countryCode" name="countryCode" required>
                  <option value="+33">France (+33)</option>
                  <option value="+82">South Korea (+82)</option>
                  {/* <!-- Add more countries as needed --> */}
                </select>
                <input type="tel" id="phone" name="phone" pattern="[0-9]*" required />
              </div>
              <div>
                <label htmlFor="types">Bread Options:</label>
                <select id="types" name="types" multiple required>
                  <option value="type2">Small Bread</option>
                  <option value="type1">Normal Bread</option>
                  {/* <!-- Add more types as needed --> */}
                </select>
              </div>
              <button type="submit">Send Order !</button>
            </form>
          </div>
        </header>
      </div>
    );
}

export default Order;