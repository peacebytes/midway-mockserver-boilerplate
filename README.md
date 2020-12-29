# why would we need mock-server
Mock server is to decouple the concerns of UI testing, especially automation testing. If the automation test is doing UI test on web or mobile native app, its only concern is UI. There would be the expectation that the backend services should be stable and consistent. Also there would be some edged cases that test data available in the system does not trigger some specific UI designs. Mock server comes to solve those pain points.
- Unstable services 
- Inconsistent Data
- Test flakiness
- Test against negative or unreal scenarios

# midway-mockserver-boilerplate

To set up
```
npm install
```

To check code format
```
npm run lint
```

To start mock server
```
npm start
```

To access Admin to see the list of available mocked endpoints
Go to: http://localhost:8000/midway
