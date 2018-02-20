import React from 'react';
import { connect } from 'react-redux';

class ContentModeratorPage extends React.Component {
    handleSaving = (e) => {
        e.preventDefault();
        const htmlInput = $('#editor1').html();

    }

    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'content-moderator.custom.js'
        this.instance.appendChild(s);
    }

    render() {
        return (
            <div ref={el => (this.instance = el)}>
                <div className="page-header">
                    <h1>Post Content</h1>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="wysiwyg-editor" id="editor1"></div>
                        <div style={{marginTop: '5px'}} className="btn-group pull-right">
                            <button className="btn btn-sm btn-default btn-white btn-round">
                                <i className="ace-icon fa fa-trash bigger-125"></i>
                                Clear
														</button>
                            <button onClick={this.handleSaving.bind(this)} className="btn btn-sm btn-danger btn-white btn-round">
                                <i className="ace-icon fa fa-floppy-o bigger-125"></i>
                                Save
														</button>

                            <button className="btn btn-sm btn-success btn-white btn-round">
                                <i className="ace-icon fa fa-globe bigger-125"></i>

                                Publish
															<i className="ace-icon fa fa-arrow-right icon-on-right bigger-125"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = connect()(ContentModeratorPage);