import db
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/month', methods=['GET'])
def month():
    month = request.args.get('month', type=int)
    query_res = db.Pazar.get_by_month(month)
    data = []

    for r in query_res:
        tmp = {'year': r['year'], 'days': []}
        for day in r['days']:
            tmp['days'].append(day.serialize)
        data.append(tmp)

    # data = [r.serialize for r in query]
    return jsonify(data)


@app.route('/test', methods=['GET'])
def test():
    query = db.Pazar.get_by_year()
    data = [r.serialize for r in query]
    return jsonify(data)


if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True, host='0.0.0.0')
