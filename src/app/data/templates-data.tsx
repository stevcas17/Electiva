export const initialTabs = [
  // {
  //   index: 0,
  //   title: 'Portal comercios',
  //   className: 'question-tabs-item active-tabs'
  // },
  {
    index: 0,
    title: 'Gou',
    className: 'question-tabs-item active-tabs'
  },
  {
    index: 1,
    title: 'Código QR',
    className: 'question-tabs-item inactive-tabs'
  },
  {
    index: 2,
    title: 'Modelos de recaudo',
    className: 'question-tabs-item inactive-tabs'
  }
];

export const QrQuestions = [
  {
    id: 1,
    title: '¿Qué es QR entre bancos?',
    description: `
      <p>Es el método sencillo, rápido y seguro, que reemplaza el efectivo y les permite a tus clientes, que sea, solo leyendo tu QR. * </p>
      <p><i><sup>* Funcionalidad sujeta a que la entidad la habilite.</sup></i></p>
    `
  },
  {
    id: 2,
    title: '¿Existe QR para persona natural y jurídica?',
    description:
      '<p>Sí, QR entre bancos funciona para emprendedores o comerciantes inscritos como persona Natural o para comercios creados como persona Jurídica.</p>'
  },
  {
    id: 3,
    title: '¿Solicitar un código QR entre entidades tiene algún costo?',
    description: '<p>Generar un código QR entre bancos a través de Gou es totalmente GRATIS.</p>'
  },
  {
    id: 4,
    title: '¿Cuánto me cuesta recibir mis ventas por QR?',
    description:
      '<p>Recuerda que todas las transacciones que se hagan entre entidades Aval no tendrán ningún costo. Las demás tarifas dependen de la Entidad Aval con la que contrates el servicio. Para más información dirígete a <a href="https://www.goupagos.com.co/cuanto-cuesta" target="_blank">www.goupagos.com.co/cuanto-cuesta</a></p>'
  },
  {
    id: 5,
    title: '¿Cuál es el monto mínimo de una transacción por código QR entre bancos?',
    description: '<p>El monto mínimo es de 1.000 pesos.</p>'
  },
  {
    id: 6,
    title: '¿Cuál es el monto máximo de una transacción por QR Entre Bancos?',
    description: `
      <p>El monto máximo de una transacción con código QR entre bancos AVAL es de $1.250.000*.</p>
      <p><i><sup>* Este valor solo aplica para entidades Aval, para otras entidades puede cambiar el monto.</sup></i></p>
    `
  },
  {
    id: 7,
    title:
      '¿Un establecimiento comercial puede tener varios códigos QR entre bancos con diferentes entidades financieras?',
    description:
      '<p>No, el establecimiento comercial solo puede tener un servicio de código QR entre bancos activo.</p>'
  },
  {
    id: 8,
    title: '¿Qué vigencia tiene mi código QR entre bancos?',
    description:
      '<p>El código QR entre bancos que generas a través de Gou no caduca y te permite recibir los pagos de tus ventas de manera indefinida o hasta que des por terminado el servicio. Al escanearlo, tus clientes podrán ingresar el monto a pagar dependiendo del producto en el que estén interesados y listo. Así recibes todos los pagos por un único canal de manera controlada y segura.</p>'
  },
  {
    id: 9,
    title: '¿Dónde consulto mi código QR entre bancos una vez lo genere?',
    description:
      '<p>Siempre lo tendrás disponible en tu cuenta Gou. Ingresa al portal y selecciona “Pagos con QR”. Puedes descargarlo las veces que lo necesites en formato PDF o compartirlo por WhatsApp o cualquier otro medio.</p>'
  },
  {
    id: 10,
    title: '¿Cuál es el procedimiento de reclamación para fallas de mi servicio de código QR entre bancos? ',
    description: `
      <p><b>Para incidentes relacionados con errores de descarga del QR</b>, el funcionamiento del portal de comercios Gou, fallas o errores en el inicio de sesión, disponibilidad del portal, bloqueo de clave de entrada a gou, cambio de datos y fallas en envío de OTP debes comunicarte con el centro de atención Gou.</p>
      <p><b>Para incidentes transaccionales del servicio de QR:</b></p>
      <ol>
          <li>Identifica La Entidad Aval de tu cuenta asociada para recibir los pagos con QR.</li>
          <li>
            Comunícate con la línea de atención de cada uno:
            <ul style="list-style-type: disc;">
              <li>
                <span>dale!</span>
                <br />
                <span>Línea de Atención Nacional 601 4010102</span>
              </li>
              <li>
                <span>Banco de Bogotá:</span>
                <br />
                <span>Línea de Atención Nacional: 018000 518 877</span>
              </li>
              <li>
                <span>Banco de Occidente:</span>
                <br />
                <span>Línea de Servicio al cliente: 01 800 05 14652</span>
              </li>
              <li>
                <span>Banco Popular S.A.:</span>
                <br />
                <span>Teléfono: 01 8000 523456</span>
              </li>
              <li>
                <span>Banco AV Villas S.A.:</span>
                <br />
                <span>Línea única: 018000518000 Nacional</span>
              </li>
            </ul>
          </li>
      </ol>
    `
  },
  {
    id: 11,
    title: '¿Puedo tener acceso a un código QR físico y digital?',
    description: `
      <p>Lo primero que debes hacer es registrarte en el portal de comercios Gou.</p>
      <p>Luego selecciona la opción “Pagos con QR” para iniciar el proceso de solicitud del servicio. Luego que verifiquemos que eres tú el dueño de la información que ingresaste, conocerás las tarifas de tu producto, solicita la generación de tu código QR y confirma los campos de dirección de domicilio.</p>
      <p>En unos minutos tendrás tu código QR para descargar y/o compartir por WhatsApp o cualquier otro medio.  ¡Aún hay más! Recibirás tu código QR físico, unos días después*, en la dirección que registraste, para que lo dejes visible dónde y cuándo lo necesites.</p>
    `
  },
  {
    id: 12,
    title: '¿Como visualizo las ventas realizadas a través de mi código QR entre bancos?',
    description: `
      <p>Todos los pagos que recibas los podrás visualizar de una forma sencilla y simple en la sección “Tus ventas”.  Allí puedes seleccionar la cantidad de transacciones que quieres ver en pantalla y filtrar los resultados tal y como lo necesites.</p>
      <p>Con este módulo tendrás detallada toda la información de tus ventas para mayor control de tus finanzas.</p>
    `
  },
  {
    id: 13,
    title: '¿Cómo realizo una devolución de una venta hecha a través de mi código QR entre bancos?',
    description: `
      <p>Todo el proceso lo podrás hacer directamente en tu cuenta, de manera rápida, fácil y segura.</p>
      <p>En la sección “Tus ventas” podrás revisar cada una de las transacciones de tu comercio. Identifica la que quieres devolver y haz clic sobre ella, al final verás la opción “Devolver transacción.”</p>
      <p>Selecciona el motivo de la devolución, verifica el detalle de la devolución y dale confirmar. La solicitud será al instante y podrás visualizarla cuando quede efectuada. Al finalizar el proceso podrás descargar el comprobante o enviarlo por correo.</p>
    `
  },
  {
    id: 14,
    title: '¿Qué hago si tengo un requerimiento con mi producto o mi cuenta gou?',
    description: `
      <p>¡Tranquilo! en la eventualidad que necesites escalar algún requerimiento, comentario o solicitud tenemos disponible una mesa de trabajo lista para atenderte. Estos son nuestros canales y horarios</p>
      <p>Línea de atención al cliente</p>
      <p>
        Teléfonos: 601 7432626 - 01 8000 515826
        <br />
        Horario de lunes a viernes 7 a.m. a 10 p.m., sábados, domingos y festivos de 8 a.m. a 12 m. y 1:00 p.m. a 5:00 p.m. 
        <br />
        Mail: soportegoupagos@en-contacto.co
      </p>
    `
  },
  {
    id: 15,
    title: '¿Qué pasa si quiero dar por terminado el servicio de recibir pagos con código QR entre bancos?',
    description: `
      <p>Para realizar el proceso de cancelación del servicio de QR, <b>comunícate con la línea de atención</b> de la Entidad Aval con la que tienes tu cuenta de ahorro o corriente asociada al servicio de código QR entre bancos.</p>
      <ul style="list-style-type: disc;">
        <li>
          <span>dale!</span>
          <br />
          <span>Línea de Atención Nacional 601 4010102</span>
        </li>
        <li>
          <span>Banco de Bogotá:</span>
          <br />
          <span>Línea de Atención Nacional: 018000 518 877</span>
        </li>
        <li>
          <span>Banco de Occidente:</span>
          <br />
          <span>Línea de Servicio al cliente: 01 800 05 14652</span>
        </li>
        <li>
          <span>Banco Popular S.A.:</span>
          <br />
          <span>Teléfono: 01 8000 523456</span>
        </li>
        <li>
          <span>Banco AV Villas S.A.:</span>
          <br />
          <span>Línea única: 018000518000 Nacional</span>
        </li>
      </ul>
    `
  },
  {
    id: 16,
    title: '¿Quién te presta este servicio de código QR entre bancos?',
    description: `
      <p>El servicio es prestado por las Entidades de Grupo Aval: Banco de Bogotá, Banco de Occidente, Banco Popular, Banco AV Villas y dale!  dependiendo de la Entidad Aval en la que tengas tu cuenta de recaudo. Si tu cliente está pagando con una cuenta de los Bancos Aval o dale! y tu tienes una cuenta en Las Entidades Aval, la transacción se realizará a través de la plataforma de Grupo Aval. Si tu cliente está pagando con una cuenta de entidades no pertenecientes a Grupo Aval, la transacción ser realizará por la infraestructura del sistema de pagos de Redeban.</p>
      <p>La Entidad Aval en la que tengas tu cuenta como comercio, será responsable de que recibas los recursos de tus ventas en dicha cuenta.</p>
    `
  },
  {
    id: 17,
    title: '¿Si tengo una duda con las comisiones descontadas para este medio de pago, con quién debo contactarme?',
    description:
      '<p>Para consultar y verificar tus comisiones comunícate con Línea de atención al cliente 601 7432626 - 01 8000 515826 en horario de lunes a viernes 7 a.m. a 10 p.m, sábados, domingos y festivos de 8 a.m. a 12 m. y 1:00 p.m. a 5:00 p.m.</p>'
  }
];

export const CodeQuestions = [
  {
    id: 1,
    title: '¿Cómo puedo obtener mi código QR?',
    description:
      'Después de registrarse  al portal comercios, debes  asociar tu cuenta recaudadora de los bancos Aval o Gou, y elegir la opción de código QR. En ese momento recibirás a tu correo electrónico una imagen del código QR  que podrás descargar en tu dispositivo móvil o tablet para empezar a vender.'
  },
  {
    id: 2,
    title: '¿Qué información contiene el código QR?',
    description:
      'Contiene  la identificación del comercio, los datos de tu comercio para procesar las compras de tus clientes y la parametrización de los impuestos que fueron ingresados en el registro.'
  },
  {
    id: 3,
    title: '¿Cómo es el proceso de compra de mis clientes con código QR estático?',
    description:
      'Tu código QR  es una imagen de los datos de tu negocio; al interactuar con la billetera digital o monedero del cliente, este va a leer el código QR e ingresara el valor de la compra.'
  },
  {
    id: 4,
    title: '¿Cómo oriento a mis clientes para que me paguen con código QR?',
    description:
      'Cada app bancaria cuenta con una usabilidad diferente, debes orientar al cliente a tener la última versión del app bancaria, ingresar a ésta y buscar la opción de lectura de Código QR.'
  },
  {
    id: 5,
    title: '¿Puedo mostrar mi código QR desde mi celular?',
    description:
      '¡Claro que sí! Puedes guardar el código QR como una imagen y mostrarlo en cualquier momento y en cualquier lugar.'
  },
  {
    id: 6,
    title: '¿Cómo recibo confirmación de la compra con mi cliente?',
    description:
      'Vas a recibir la confirmación por mensaje de texto (SMS) de la compra a tu número de celular, de igual manera podrás validar en el módulo de reportes de tu comercio.'
  },
  {
    id: 7,
    title: '¿La confirmación por mensaje de texto, funciona con todos los operadores?',
    description:
      'Es la nueva solución del grupo Aval, pensada exclusivamente para tu emprendimiento o negocio, que te abrirá las puertas a diferentes opciones de pagos electrónicos, de esta manera te ofrecemos nuestros servicios de pago con QR, pasarela de pago y link de pago, soportados en nuestra experiencia, para hacer crecer tu negocio, de una manera digital, segura y ágil. <b>Pendiente por definir</b>'
  },
  {
    id: 8,
    title: '¿Tener el código QR me genera algún cobro mensual?',
    description:
      'No te va a generar ningún cobro periódico, salvo el cobro del % por transacción acordado con el portal comercios.'
  },
  {
    id: 9,
    title: '¿Debo tener algún mínimo de transacciones mensual con QR para que no me cobren?',
    description:
      'No, el código QR es una alternativa de pago para tu negocio que no te obliga a tener transacciones mínimas.'
  },
  {
    id: 10,
    title: '¿Cómo realizo una devolución en caso que mi cliente la solicite?',
    description:
      'Es la nueva solución del grupo Aval, pensada exclusivamente para tu emprendimiento o negocio, que te abrirá las puertas a diferentes opciones de pagos electrónicos, de esta manera te ofrecemos nuestros servicios de pago con QR, pasarela de pago y link de pago, soportados en nuestra experiencia, para hacer crecer tu negocio, de una manera digital, segura y ágil. <b>Pendiente por definir</b>'
  },
  {
    id: 11,
    title: '¿Las devoluciones de las ventas por QR me generan algún cobro?',
    description:
      'Es la nueva solución del grupo Aval, pensada exclusivamente para tu emprendimiento o negocio, que te abrirá las puertas a diferentes opciones de pagos electrónicos, de esta manera te ofrecemos nuestros servicios de pago con QR, pasarela de pago y link de pago, soportados en nuestra experiencia, para hacer crecer tu negocio, de una manera digital, segura y ágil. <b>Pendiente por definir</b>'
  },
  {
    id: 12,
    title: '¿Puedo recibir pagos con QR de cualquier banco en mi punto de venta?',
    description:
      'Podrás aceptar pagos desde las bancas móviles o billeteras de las entidades que estén afiliadas a pagos RBM con código QR .'
  },
  {
    id: 13,
    title: '¿Las ventas que realice por QR serán abonadas en línea a mi cuenta registrada o recaudadora?',
    description: 'Así es! Recibirás un mensaje de texto a tu celular con la confirmación de la transacción en línea.'
  }
];

export const LinkQuestions = [
  {
    id: 1,
    title: '¿Qué medios de pago puedo ofrecerle a mis clientes, con el Link de Pagos Gou?',
    description:
      '<p>Con el Link de Pagos Gou, tus clientes podrán pagar sus compras a través de PSE, Botón de Pagos Aval, Botón de Pagos dale!, Tarjeta de Crédito (Visa y Mastercard) o Tarjeta Débito con Código CVV.</p><p>Cada uno de tus compradores podrá elegir el medio de pago que más le convenga.</p>'
  },
  {
    id: 2,
    title: '¿Cómo le envío el Link de Pagos a mis compradores?',
    description:
      'Luego de acordar la compra con tu cliente, puedes compartirle tu Link de Pagos a través de WhatsApp, correo electrónico o redes sociales como Facebook e Instagram.'
  },
  {
    id: 3,
    title: '¿Puedo administrar mi inventario en el Link de Pagos Gou?',
    description:
      '<p>Si, este es un beneficio adicional que tenemos para ti.</p><p>Con el Link de Pagos Gou, puedes llevar el control de las existencias de tus productos y servicios de dos formas:</p><p>1. Una vez tu cliente pague el producto comprado a través del Link, el inventario de dicho producto se actualizará de forma automática. </p><p>2. Si haces una venta presencial, podrás ajustar manualmente el stock de la referencia vendida.</p>'
  },
  {
    id: 4,
    title: 'Después de generado, ¿cuánto tiempo estará activo un Link de Pagos Gou?',
    description:
      'Tú eliges el periodo durante el cual funcionará un Link de Pagos. Sin embargo, si no quieres ponerle una duración determinada, tu Link estará activo por tiempo indefinido.'
  },
  {
    id: 5,
    title:
      '¿En cuánto tiempo quedará abonada, en mi cuenta recaudadora, la plata recibida a través de un Link de Pagos Gou?',
    description:
      'La plata recaudada desde un Link de Pagos Gou llegará a tu cuenta de Banco de Bogotá, AV Villas, Banco de Occidente, Banco Popular o dale!, un día hábil después de realizada la transacción.'
  },
  {
    id: 6,
    title: '¿Puedo poner fotos de mi producto vendido, en el Link de Pagos?',
    description:
      '<p>Claro que sí. Puedes subir una foto de tu producto en formato JPG o PNG, con un tamaño no mayor a 10 MB. </p><p>Además, si lo quieres, también puedes incluir detalles del inventario de tu producto.</p>'
  },
  {
    id: 7,
    title: '¿Puedo usar un mismo Link de Pagos para hacer varias ventas?',
    description:
      'Los Links de Pagos son únicos para cada transacción. Debes generar uno nuevo por cada venta que realices.'
  },
  {
    id: 8,
    title: '¿Cuántos productos puedo incluir en un Link de Pagos?',
    description:
      'En un solo Link de Pagos puedes incluir uno o varios productos, con una descripción general y un único valor que corresponderá a la sumatoria de los valores de todos los productos vendidos.'
  },
  {
    id: 9,
    title: '¿Cuánto cuesta generar un link de pagos?',
    description:
      'Generar un Link de Pagos no tiene costo alguno. Lo único que debes tener en cuenta es la comisión pactada con tu banco recaudador, por cada transacción exitosa realizada a través del Link.'
  },
  {
    id: 10,
    title: '¿Qué medios de pago puedo ofrecerle a mis clientes, con la Pasarela de Pagos Gou?',
    description:
      '<p>Con la Pasarela de Pagos Gou, tus clientes podrán pagar sus compras a través de PSE, Botón de Pagos Aval, Botón de Pagos dale!, Tarjeta de Crédito (Visa y Mastercard) o Tarjeta Débito con Código CVV.</p><p>Cada uno de tus compradores podrá elegir el medio de pago que más le convenga.</p>'
  },
  {
    id: 11,
    title:
      '¿En cuánto tiempo quedará abonada, en mi cuenta recaudadora, la plata recibida a través de mi Pasarela de Pagos Gou?',
    description:
      'La plata recaudada desde tu Pasarela de Pagos Gou llegará a tu cuenta de Banco de Bogotá, AV Villas, Banco de Occidente o Banco Popular, un día hábil después de realizada la transacción.'
  }
];

export const GouQuestions = [
  {
    id: 1,
    title: '¿Qué es Gou?',
    description:
      '<p>El Portal de comercios Gou es la nueva solución de las entidades de Grupo Aval diseñada para que comercios, emprendimientos y empresas, comercio bancarizado o no bancarizado, accedan a diferentes opciones de pagos, tengan o no un punto de venta o un sitio web.</p>'
  },
  {
    id: 2,
    title: '¿Cómo me registro en Gou?',
    description:
      '<p>Ingresa a <a href="https://www.goupagos.com.co" target="_blank">www.goupagos.com.co</a> selecciona la opción “regístrate”. Solicitaremos alguna información básica tuya y de tu negocio para verificarla de manera rápida y en línea. Recibirás un código de confirmación a través de un mensaje de texto. Luego que verifiquemos que eres tú el dueño de la información que registraste, podrás asignar un correo y una contraseña con la que siempre ingresarás al portal y...eso es todo! Bienvenido a gou! Ya estás listo para solicitar el producto de pago que mejor se adapte a tu negocio.</p>'
  },
  {
    id: 3,
    title: '¿Qué costo tiene registrarse en Gou?',
    description: '<p>Registrarte en gou no tiene ningún costo. Es totalmente GRATIS.</p>'
  },
  {
    id: 4,
    title: '¿Qué servicios puedo solicitar en Gou?',
    description: `
      <p>En el portal de comercios gou tenemos servicios de pagos que te permitirán recaudar los recursos provenientes de ventas digitales o presenciales, de los productos o servicios de tu comercio: </p>
      <p><u>Código QR entre bancos:</u> Para tus ventas en establecimientos físicos, el código QR entre bancos es una herramienta fantástica que le permite a tus clientes pagar por medio de la aplicación móvil de su banco, billeteras o monederos sin importar a que entidad pertenece*.</p>
      <p><u>Pasarela, link de pagos, micrositios:</u> Integra con tu página web pagos 100% en línea. O crea links de pagos para compartir con tus clientes. Si no tienes una página web y la requieres, en gou podrás crear los sitios que necesites para mostrar, adquirir y pagar tus productos y/o servicios. <u><i>Estos servicios estarán próximamente habilitados para tu comercio.</i></u></p>
      <p>Recuerda todos nuestros productos cuentan con certificaciones y herramientas de seguridad que permiten ofrecer pagos digitales con total tranquilidad. </p>
    `
  },
  {
    id: 5,
    title: '¿Necesito una cuenta de los Bancos Aval para solicitar un servicio de pago?',
    description:
      '<p>Sí, para solicitar cualquiera de nuestros servicios, tu cuenta de recaudo debe ser una cuenta activa de cualquiera de nuestras entidades (Banco de Bogotá, Banco de Occidente, Banco Popular, Banco AV Villas o dale!).  Si no tienes una cuenta en los Bancos Aval, puedes abrir tu cuenta dale! * en minutos, sin tramites ni papeleos y de manera 100% digital aquí: <a href="https://www.dale.com.co/" target="_blank">www.dale.com.co</a></p>'
  }
];

export const CollectionModels = [
  {
    id: 1,
    title: '¿Qué es un modelo agregador?',
    description: `
      <p>Es un modelo de pago en el que un tercero te ofrece la infraestructura necesaria para que puedas recibir los pagos de tus ventas.  Los recaudos llegarán a la cuenta de ese agregador y te dispersará a tu cuenta de acuerdo con los plazos acordados y con una tarifa establecida previamente.</p>
      <p>En gou, el servicio Agregador, será prestado directamente por Evertec PlacetoPay SAS a los comercios afiliados a las Entidades Aval. Para tal fin, Evertec PlacetoPay SAS suscribirá un contrato de servicios con cada comercio referido por los Bancos Aval.</p>
    `
  },
  {
    id: 2,
    title: '¿Qué es un modelo gateway?',
    description:
      '<p>Es un modelo de pago en el que recibes el dinero de tus ventas directo a tu cuenta y de acuerdo con las condiciones que hayas pactado con tu Banco Aval.</p>'
  }
];
