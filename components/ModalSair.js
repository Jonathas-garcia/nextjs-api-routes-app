import React, { Component } from 'react'
import Button from '@bit/react-bootstrap.react-bootstrap.button'
import Modal from '@bit/react-bootstrap.react-bootstrap.modal'
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import Link from 'next/link'

class ModalSair extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
	
		this.setState({ show: true });
	}

	render() {
		return (
			<>
				<Button variant="primary" onClick={this.handleShow}>
					Voltar
        </Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Voltar</Modal.Title>
					</Modal.Header>
					<Modal.Body>Voltando para página inicial!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Cancelar
            </Button>
			<Link href="/">
						<Button variant="primary" onClick={this.handleClose}>
							Prosseguir
							
            </Button>
			</Link>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default () => (<div><ReactBootstrapStyle /><ModalSair /></div>)