function App() {
    const [activeTab, setActiveTab] = useState('cars');
    const [cars, setCars] = useState([]);
  
    useEffect(() => {
      if (activeTab === 'cars') {
        fetchAutos();
      } else if (activeTab === 'packages') {
        fetchPaketat();
      } else {
        fetchAllUser();
      }
    }, [activeTab]);
  
    const fetchAutos = () => {
      fetch('http://localhost:8080/cars')
        .then(response => response.json())
        .then(data => setCars(data))
        .catch(error => console.error('Error fetching cars:', error));
    };
  
    // Other fetch functions...
  
    const handleTabChange = (event, newValue) => {
      setActiveTab(newValue);
    };
  
    return (
      <div>
        <AppBar position="static">
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Add Car" value="addCar" />
            <Tab label="Delete Car" value="deleteCar" />
            <Tab label="Update Car" value="updateCar" />
            <Tab label="Autos" value="cars" />
          </Tabs>
        </AppBar>
        <Container>
          <Box mt={3}>
            {activeTab === 'cars' && (
              <div>
                <Typography variant="h4">Autos</Typography>
                <Autos cars={cars} />
              </div>
            )}
          </Box>
        </Container>
      </div>
    );
  }
  
  export default App;
  