import { TableComponent } from './TableComponent';

const bvrdPage = 'https://bvrd.com.do'
const navigateToBvrdPage = ( bvrdPage ) => window.location.href = bvrdPage;
 

export const BvrdApp = () => {
  return (
    
    <>  
      <body>
        <div id='root'>
            
            <div className='menu-container'>
              <img 
                src='https://emisores.bvrd.com.do/assets/logo-38df5c49.svg'
                width='125'
                height='auto'
                style={{ cursor: 'pointer' }}
                />
                <div className='icons-container'>
                  <div className='user-icon-container'>
                      <div>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className="icon"
                          height="1em"
                          width="1em"
                          onClick={() => navigateToBvrdPage(bvrdPage)}
                          style={{ cursor: 'pointer' }}
                          xmlns="http://www.w3.org/2000/svg"
                          >
                          <path 
                            d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'>
                          </path> 
                        </svg>
                      </div>

                  </div>

                </div>
                <div className=' '>
                <span 
                    className='bars'
                    style={{ cursor: 'pointer' }}
                  ></span>
                  <span 
                    className='bars'
                    style={{ cursor: 'pointer' }}
                  ></span>
                  <span 
                    className='bars'
                    style={{ cursor: 'pointer' }}
                  ></span>
                </div>
            </div>

            <div className='divPersonalizado'>
              <h2 
                className='titleApp'
                  >Emisores de Renta Variable
              </h2>
            </div>
            <TableComponent />

            <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src="https://cdn.bvrd.com.do/wp-content/uploads/2023/10/logo_bvrd_small.svg"
              alt="BVRD Logo"
              style={{ cursor: 'pointer' }}
              width='385'
              onClick={() => navigateToBvrdPage(bvrdPage)}
            />
            
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
          <img
              src="https://emisores.bvrd.com.do/assets/gptw-3268a7f2.svg"
              width='385'
              style={{ cursor: 'pointer' }}
          />
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-container">
        <div className="col-sm-3">
          <div className="text-gray">
            Calle José Brea Peña # 14, Edificio BVRD 2do Piso, Evaristo Morales
            <br />
            <span className="santo-domingo">Santo Domingo, República Dominicana</span>
          </div>
          <div className="social-icons">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
          </div>
        </div>
        <div className="col-sm-3">
          <h3>
            Contactos Oficiales
          </h3>
          <div className="contact-info">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                      d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'>
                    </path> 
              </svg>
              info@bvrd.com.do
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
               <path 
                      d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'>
                    </path>
              </svg>
              (809) 567-6694
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                      d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'>
                    </path> 
              </svg>
              (829) 567-6694
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <h3>Canal de Denuncias</h3>
          <div className="contact-info">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
              <path 
                d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'>
              </path> 
              </svg>
              denuncias@bvrd.com.do
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
              <path 
                d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'>
              </path> 
              </svg>
              (809) 564-6694 | EXT. 224
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <h3>Miembros de</h3>
          <img
            src="https://emisores.bvrd.com.do/assets/fiab-amerca-bvrd-8d8a1251.png"
            alt="FIAB Amerca BVRD"
            width="275"
          />
        </div>
      </div>
      <div className="footer-bottom">
        <p className="rights-reserved">Copyright © todos los derechos reservados BVRD</p>
      </div>
    </footer>
        </div>
      </body>
    </>
  );
};