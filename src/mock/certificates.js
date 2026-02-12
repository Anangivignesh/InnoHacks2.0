
export const getCertificateData = (user) => ({
    participantName: user?.name || 'John Doe',
    eventName: 'InnoHacks 2.0',
    eventDate: 'March 15-16, 2025',
    certificateId: 'INNO2025-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    issueDate: 'March 16, 2025',
    achievement: 'Participant',
    organizer: 'Tech University',
    verified: true,
});
