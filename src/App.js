import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={nama:'',pemain:[]}
  }
  klik(){
    this.setState({nama: this.refs.nama.value});
  }
  klik2(){
    var x=this.state.nama;
    axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+x).then((ambilData)=>{
      console.log(ambilData.data.player);
      this.setState({
        pemain:ambilData.data.player,
      })
    })
  }
  render() {
    const data = this.state.pemain.map((item,index)=>{
      var name = item.strPlayer;
      var posisi = item.strPosition;
      var foto = item.strThumb;
      var ket = item.strDescriptionEN
      return <div className="row">
              <div className="col-xs-12 col-lg-12">
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h4><b>{name} ( posisi : {posisi} )</b></h4>
                  </div>
                  <div className="panel-body">
                    <div className="col-lg-4">
                      <img src={foto} alt="ok"/>
                    </div>
                    <div className="col-lg-8">
                      <p>{ket}</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
    })
    return (
      <div className="container">
      <center>
          <h1><center>List Player {this.state.nama}</center></h1>
          <div className="row">
              <input className="form-control" ref="nama" type="text" placeholder="Input in here . . ." onInput={()=>{this.klik();}}/><br/>
              <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik2();}}>Check</button>
            </div>
            </center>         
        <br/>
        {data}
      </div>
    );
  }
}

export default App;