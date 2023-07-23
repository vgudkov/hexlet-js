const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

const getFreeDomainsCount = (emailList) => {
  const freeDomains = emailList.reduce((acc, email) => {
    const [, domain] = email.split('@');

    if (freeEmailDomains.includes(domain)) {
      acc[domain] = (acc[domain] || 0) + 1;
    }
    return acc;
  }, {});
  return freeDomains;
};

const test = getFreeDomainsCount(emails);
console.log(test);
