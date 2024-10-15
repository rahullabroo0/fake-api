// This code shows all the values
import React from "react";
import "./App.css";
class App extends React.Component {
    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );

        return (
            <div className="App">
              <h1>Fetch data from an api in react</h1>
                <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"User_ID: "}
                                    </strong>
                                    {item.id},
                                </div>
                                <div>
                                    <strong>
                                    Title:
                                    </strong> {item.title},
                                </div>
                                <div>
                                    <strong>
                                    Desc:
                                    </strong> {item.description}
                                </div>
                                <div>
                                    <strong>
                                    Category:
                                    </strong> {item.category}
                                </div>
                                <div>
                                    Image: <img src={item.image} alt="not visible" width="10%" height="10%"></img>
                                </div>
                                <div>
                                    <strong>Rating</strong> <br></br>
                                    <u>Rate</u>{item.rating.rate}<br></br>
                                    <u>count</u>{item.rating.count}
                                </div>
                                
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
