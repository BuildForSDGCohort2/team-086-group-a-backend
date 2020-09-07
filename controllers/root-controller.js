const rootController = () => {
  const apiNavigation = (req, res) => {
    const data = [
      {
        url: "/api/v1.0.0",
        methods: [
          {
            GET: {
              desc: "API documentation",
            },
          },
        ],
      },
    ];

    res.json(data);
  };

  return { apiNavigation };
};

module.exports = rootController;
