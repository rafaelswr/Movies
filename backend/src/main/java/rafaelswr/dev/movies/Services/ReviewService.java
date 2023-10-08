package rafaelswr.dev.movies.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import rafaelswr.dev.movies.Entities.Movie;
import rafaelswr.dev.movies.Entities.Review;
import rafaelswr.dev.movies.Repositories.ReviewRepository;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review creteReview(String imdbId, String body) {
        Review review = reviewRepository.insert(new Review((body)));

        /*
        * Tipico POO com MongoDB
        *
        * ao criar uma  nova review sobre um dado movie(imdbId)
        * precisamos de o adicionar à lista de Reviews do movie.
        * É o que está a ser feito aqui, foi criada uma review com um dado body,
        * de seguida precisa-se de atualizar a classe movie com uma nova review, para
        * isso faz-se o matching entre os imdb id's e aplica-se o update adicionado essa review
        * à lista de reviews do movie.
        *
        * */
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId")
                        .is(imdbId))
                .apply(new Update()
                        .push("reviews").value(review)).first();


        return review;
    }


}
