import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from '../Components/About';
import Resume from '../Components/Resume';
import Portfolio from '../Components/Portfolio';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',
            resumeData: {}
        };
    }

    getResumeData() {
        $.ajax({
            url: '/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({resumeData: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div className="App">
                <Header data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
                <section id="portfolio">
                    {this.state.resumeData.portfolio ?
                        <div className="row">
                            <Portfolio title={"Writing"} data={this.state.resumeData.portfolio.writing}/>
                            <Portfolio title={"Project Management"} data={this.state.resumeData.portfolio.projectmgmt}/>
                            <Portfolio title={"UX Design"} data={this.state.resumeData.portfolio.designs}/>
                        </div>
                    : null }
                </section>
                <About data={this.state.resumeData.main}/>

                {/*<Testimonials data={this.state.resumeData.testimonials}/>*/}
                {/*<Contact data={this.state.resumeData.main}/>*/}
                <Footer data={this.state.resumeData.main}/>
            </div>
        );
    }
}

export default App;