// this is a backend server

const expertise = [
    {
        id: 0,
        title: 'LLMs Application',
        desc: 'This project aims to employ advanced AI techniques to analyze over 50,000 hours of audio records from remote tutoring sessions. The conversational analysis will examine group behavior and learning outcomes over time, measured through regular assessments and tutor evaluations.',
    },
    {
        id: 1,
        title: 'RL Algorithms in Financial Markets',
        desc: "This project aims to construct a reinforcement learning (RL) agent proficient in executing actions within financial markets. \
        We develop models with an ensemble approach that are adaptable to variations in the environment's response.",
    },
    {
        id: 2,
        title: 'Neuropricing in Immersive Environment',
        desc: 'We investigated human willingness to pay in virtual and physical environments by developing virtual reality (VR) sales environments in Unity, and conducting cross-over studies with 30 participants.',
    },
    {
        id: 3,
        title: 'Machine Listening',
        desc: "The project aims to classify events in DCASE 2021 challenge. We designed a model that included self-attention and convolutional layers to generate audio embeddings and finetuned the ResNet-50 to generate visual embeddings. Finally, we deployed a fusion model that incorporated both audio and visual data for sound event detection.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
