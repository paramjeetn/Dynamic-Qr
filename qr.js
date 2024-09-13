import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path'

  const url ="www.google.com"

  try {
    // Generate the QR code as a buffer
    const qrCodeBuffer = await QRCode.toBuffer(url);

    // Define the path where the QR code will be saved
    const filePath = path.join(__dirname, 'qr-code.png');

    // Write the buffer to a file
    fs.writeFileSync(filePath, qrCodeBuffer);

    // Respond to the client
  } catch (err) {
    // Handle any errors that occur during QR code generation
    console.log('Error generating QR code.');
  }
