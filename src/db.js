const testData = [...Array(150).keys()].map(i => ({ id: (Math.floor(Math.random() * 10000) + i), firstName: `Name ${i + 1}`, lastName: `Surname ${i + 1}`, email: `email${i+1}@${i+1}mail.com`, phoneNumber: `${Math.floor(Math.random() * 100000000)}` }));
export default JSON.stringify(testData);