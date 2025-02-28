import Portfolio from "../model/Portfolio.js";

//create Portfolio
export const createPortfolio = async (req, res) => {
  const { title, description, img, codelink, livelink } = req.body;
  try {
    const newPortfolio = new Portfolio({ title, description, img, codelink, livelink, userId: req.user.id });
    await newPortfolio.save();
    res.status(201).json(newPortfolio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//read Portfolio
export const getAllPortfolios = async (req, res) => {
    try {
      const portfolios = await Portfolio.find();
      res.json(portfolios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  //delete Portfolio
  export const deletePortfolio = async (req, res) => {
    try {
      await Portfolio.findByIdAndDelete(req.params.id);
      res.json({ message: "Portfolio deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  //update Portfolio
  export const updatePortfolio = async (req, res) => {
    try {
      const updatedPortfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedPortfolio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  