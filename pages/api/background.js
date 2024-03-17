const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Carnegie Mellon University',
                degree: 'MS, Artificial Intelligence Engineering',
                detail: "Master of Science in Artificial Intelligence Engineering",
                year: '2023-2024'
            },
            {
                id: 1,
                title: 'University of Liverpool',
                degree: 'BS, Computer Science',
                detail: "Bachelor of Science in Computer Science (First Class Honor)",
                year: '2019-2023'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Industrial and Commercial Bank of China',
                role: 'Data Engineer Intern',
                url: 'no website',
                desc: 'Developed SQL query algorithms to identify valuable customers across multiple bank branches.',
                year: '06/2020 - 08/2020',
                location: 'Shanghai, China'
            },
            {
                id: 2,
                title: 'Shanghai Action Information Technology Co., Ltd.',
                role: 'Data Engineer Intern',
                url: 'no website',
                desc: 'Created a multi-stage product quantization algorithm to reduce vector data retrieval latency.',
                year: '06/2022 - 08/2022',
                location: 'Shanghai, China'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
