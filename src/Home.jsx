import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/myData")
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, [mydata]);

  return (
    <div>
      {mydata.map((item) => {
        return (
          <Card
            key={item}
            sx={{
              position: "relative",
              maxWidth: 333,
              mt: 6,
              ":hover .MuiCardMedia-root": {
                scale: "1.1",
                transition: "0.3s",
              },
              ":hover .MuiBox-root": {
                display: "block",
                position: "absolute",
                top: 0,
                right: 0,
              },
            }}
          >
            <CardMedia
              sx={{
                height: 277,
              }}
              // @ts-ignore
              image={`${item.productImage[0].url}`}
              title="green iguana"
            />
            <CardContent>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={3}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {item.productTitle}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {item.productPrice} $
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {item.productDescription}
              </Typography>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Rating
                name="read-only"
                value={item.productRating}
                readOnly
                precision={0.1}
              />
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
