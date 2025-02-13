import React from 'react';
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
        const amount = Array.from(event.target.amount.selectedOptions).map(option => sanitizeInput(option.value));

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        console.log({ email, name, phone, types, amount});

        alert("Order sent! Please check your email for confirmation.");
        // Reset the form after submission
        event.target.reset();
    };
    const [language, setLanguage] = React.useState('en');

    const handleLanguageChange = (lang) => {
      setLanguage(lang);
    };

    const getLabel = (key) => {
      const labels = {
        en: {
          name: "Name:",
          email: "Email:",
          phone: "Phone Number:",
          breadOptions: "Bread Options:",
          amount: "Amount:",
          sendOrder: "Send Order !",
          header: "Place an order"
        },
        fr: {
          name: "Nom:",
          email: "Email:",
          phone: "Numéro de téléphone:",
          breadOptions: "Options de pain:",
          amount: "Quantité:",
          sendOrder: "Envoyer la commande !",
          header: "Passer une commande"
        },
        kr: {
          name: "이름:",
          email: "이메일:",
          phone: "전화번호:",
          breadOptions: "빵 옵션:",
          amount: "수량:",
          sendOrder: "주문 보내기 !",
          header: "주문하기",
          notice: "한국어를 선택하셨습니다. 영어로 소통하거나 Google 번역을 사용해야 합니다 :)"
        }
      };
      return labels[language][key];
    };

    React.useEffect(() => {
      if (language === 'kr') {
        alert(getLabel('notice'));
      }
    }, [language]);

    return (
      <div className="Order">
        <header className="App-header">
          <div id="order">
            <h1>{getLabel('header')}</h1>
            <div className="language-selector">
              <span role="img" aria-label="French" onClick={() => handleLanguageChange('fr')}>🇫🇷</span>
              <span role="img" aria-label="English" onClick={() => handleLanguageChange('en')}>🇬🇧</span>
              <span role="img" aria-label="Korean" onClick={() => handleLanguageChange('kr')}>🇰🇷</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">{getLabel('name')}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">{getLabel('email')}</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">{getLabel('phone')}</label>
                <select id="countryCode" name="countryCode" required>
                  <option value="+33">France (+33)</option>
                  <option value="+82">South Korea (+82)</option>
                </select>
                <input type="tel" id="phone" name="phone" pattern="[0-9]*" required />
              </div>
              <div>
                <label htmlFor="types">{getLabel('breadOptions')}</label>
                <select id="types" name="types" required>
                  <option value="type2">Small Bread</option>
                  <option value="type1">Normal Bread</option>
                </select>
              </div>
              <div>
                <label htmlFor="amount">{getLabel('amount')}</label>
                <select id="amount" name="amount" required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div></div>
              <button type="submit">{getLabel('sendOrder')}</button>
            </form>
          </div>
        </header>
      </div>
    );
}

export default Order;