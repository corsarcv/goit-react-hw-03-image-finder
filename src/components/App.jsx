import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";

import getData from "data/data";
import { Button } from "./Button/Button";


export class App extends Component {

  state = {
    searchText: "",
    images: [],
    page: 1,
    isLoading: false
  }

  async componentDidUpdate(_, prevState){
    if (prevState.searchText !== this.state.searchText || prevState.page !== this.state.page){
      try{
        this.setState({isLoading: true})
        const images = await getData(this.state.searchText, this.state.page);
        console.log(images);
        if (this.state.page === 1)
          this.setState({images});
        else
          this.setState({images: [...prevState.images, ...images]});
      }
      finally{
        this.setState({isLoading: false})
      }
    }
  }

  onSubmit = (searchText) => {
    console.log("Submit:", searchText);
    this.setState({
      searchText, 
      images: [],
      page: 1});
  }

  onLoadMore = () => {
    this.setState(prevState =>({page: prevState.page + 1}))
  }

  render = () => (
    <>
      <SearchBar onSubmit={this.onSubmit} />
      <ImageGallery images={this.state.images} />
      {this.state.isLoading && <Loader/>}
      {this.state.images.length > 0 && <Button onClick={this.onLoadMore}/>}
    </>
  );

};
