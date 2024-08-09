// import { mediaDevices } from 'react-native-webrtc';

// // Initialize WebRTC and get media devices
// let localStream;
// let remoteStream;
// let peerConnection;

// export const initializeVideoCall = async () => {
//   try {
//     // Request camera and microphone permissions
//     await mediaDevices.getUserMedia({
//       audio: true,
//       video: true,
//     });

//     // Initialize peer connection
//     peerConnection = new RTCPeerConnection({
//       iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
//     });

//     // Set up event listeners for peer connection
//     peerConnection.addEventListener('icecandidate', handleICECandidateEvent);
//     peerConnection.addEventListener('iceconnectionstatechange', handleICEConnectionStateChangeEvent);
//     peerConnection.addEventListener('track', handleTrackEvent);
//   } catch (error) {
//     console.error('Error initializing video call:', error);
//   }
// };

// export const startVideoCall = async () => {
//   try {
//     // Get user's media stream
//     localStream = await mediaDevices.getUserMedia({
//       audio: true,
//       video: true,
//     });

//     // Add local stream to peer connection
//     localStream.getTracks().forEach((track) => {
//       peerConnection.addTrack(track, localStream);
//     });

//     // Create and send offer
//     const offer = await peerConnection.createOffer();
//     await peerConnection.setLocalDescription(offer);
//     // Send the offer to the remote peer (replace with your signaling logic)
//     sendOfferToRemotePeer(offer);
//   } catch (error) {
//     console.error('Error starting video call:', error);
//   }
// };

// export const stopVideoCall = async () => {
//   try {
//     // Close local and remote streams
//     if (localStream) {
//       localStream.getTracks().forEach((track) => track.stop());
//     }
//     if (remoteStream) {
//       remoteStream.getTracks().forEach((track) => track.stop());
//     }

//     // Close peer connection
//     peerConnection.close();
//     peerConnection = null;
//     localStream = null;
//     remoteStream = null;
//   } catch (error) {
//     console.error('Error stopping video call:', error);
//   }
// };

// // Helper functions
// const handleICECandidateEvent = (event) => {
//   // Send the ICE candidate to the remote peer (replace with your signaling logic)
//   if (event.candidate) {
//     sendICECandidateToRemotePeer(event.candidate);
//   }
// };

// const handleICEConnectionStateChangeEvent = (event) => {
//   console.log(`ICE connection state changed to ${peerConnection.iceConnectionState}`);
// };

// const handleTrackEvent = (event) => {
//   // Add remote stream to the video element or handle it as needed
//   remoteStream = event.streams[0];
// };

// // Replace these with your signaling logic
// const sendOfferToRemotePeer = (offer) => {
//   // Send the offer to the remote peer using your signaling mechanism
//   console.log('Sending offer:', offer);
// };

// const sendICECandidateToRemotePeer = (candidate) => {
//   // Send the ICE candidate to the remote peer using your signaling mechanism
//   console.log('Sending ICE candidate:', candidate);
// };