import React, { Component } from 'react';
import { connect } from 'react-redux';
import globals from '../globals';
// import { Link } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { fetchAssetData } from '../actions/assets';


export class AssetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    const assetId = this.props.match.params['id'];
    if(localStorage.getItem('userToken') && localStorage.getItem('userId')) {
      this.props.fetchAssetData(assetId);
    } else {
      this.props.history.push('/login');
    }
  }

  back = () => {
    this.props.history.go(-1);
  }
  render() {
    return (
      <>
        <div className={'data-loading'}>
          <img src={require("../assets/images/spinner.svg")} className={this.state.loading && !this.props.asset_data.name ? 'loader-img' : 'hide'} alt="+" />
        </div>
        <Header />
        <div className="go-back mt-5" onClick={this.back}>
          <img src={require("../assets/images/back.svg")} alt="<<<" />
          <span>Back</span>
        </div>
        <div className="row">
          <div className="container-fluid p-0">
            {this.props.asset_data ?
              <div className="col-lg-12 p-0">
                <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 p-5">
                        <div className="text-block">
                          <h1 className="title">{globals.capitalize(this.props.asset_data.name) || 'Asset'} details</h1>
                          <img className={this.props.asset_data.icon ? "icon" : 'hide'} src={this.props.asset_data.icon} alt={this.props.asset_data.name} />
                          <p className="date" >{globals.formatDate(this.props.asset_data.date)}</p>
                        </div>
                      </div>
                      <div className="col-lg-8 p-5 others">
                        <div className={this.props.asset_data.projected_cost ? "text-block" : 'hide'}>
                          <h4>Projected cost</h4>
                          <p>{this.props.asset_data.projected_cost}</p>
                        </div>
                        <div className={this.props.asset_data.summary ? "text-block" : 'hide'}>
                          <h4>Summary</h4>
                          <p>{this.props.asset_data.summary}</p>
                        </div>
                        <div className={this.props.asset_data.date_acquired ? "text-block" : 'hide'}>
                          <h4>Date acquired</h4>
                          <p>{globals.formatDate(this.props.asset_data.date_acquired)}</p>
                        </div>
                        <div className={this.props.asset_data.cost ? "text-block" : 'hide'}>
                          <h4>Cost ($)</h4>
                          <p>{this.props.asset_data.cost ? this.props.asset_data.cost.dollar : 'n/A'}</p>
                        </div>
                        <div className={this.props.asset_data.cost && this.props.asset_data.cost.naira ? "text-block" : 'hide'}>
                          <h4>Cost(₦)</h4>
                          <p>{this.props.asset_data.cost ? this.props.asset_data.cost.naira : 'n/A'}</p>
                        </div>
                        <div className={this.props.asset_data.depreciation ? "text-block" : 'hide'}>
                          <h4>Depreciation per annum(%)</h4>
                          <p>{this.props.asset_data.depreciation}%</p>
                        </div>
                        <div className={this.props.asset_data.business_purpose ? "text-block" : 'hide'}>
                          <h4>Business purpose</h4>
                          <p>{this.props.asset_data.business_purpose}</p>
                        </div>
                        <div className={this.props.asset_data.type ? "text-block" : 'hide'}>
                          <h4>Type</h4>
                          <p>{this.props.asset_data.type}</p>
                        </div>
                        <div className={this.props.asset_data.technical_details ? "text-block" : 'hide'}>
                          <h4>Technicaldetails</h4>
                          <p>{this.props.asset_data.technical_details}</p>
                        </div>
                        <div className={this.props.asset_data.location_of_deployment ? "text-block" : 'hide'}>
                          <h4>Location of deployment</h4>
                          <p>{this.props.asset_data.location_of_deployment}</p>
                        </div>
                        <div className={this.props.asset_data.projected_cost ? "text-block" : 'hide'}>
                          <h4>Industrial link</h4>
                          <p><a href={this.props.asset_data.industrial_link}>{this.props.asset_data.industrial_link}</a></p>
                        </div>
                        <div className={this.props.asset_data.diagram ? "text-block" : 'hide'}>
                          <h4>Diagram</h4>
                          <p><a href={this.props.asset_data.diagram}>{this.props.asset_data.diagram}</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div> :
              ''}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  asset_data: state.assets.asset_data
})


export default connect(mapStateToProps, { fetchAssetData })(AssetData)
