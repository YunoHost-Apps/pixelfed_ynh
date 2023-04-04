@extends('layouts.blank')

@section('content')
<div class="container">
	<div class="row">
		<div class="col-12 col-md-6 offset-md-3 pt-5">
			<p class="h3 text-center font-weight-lighter py-3 mb-4 text-secondary">Follow <span class="text-dark">{{$profile->username}}</span> on Pixelfed</p>
			<div class="card">
				<div class="card-header p-0 m-0">
					<div style="width: 100%;height: 140px;background: #0070b7"></div>
				</div>
				<div class="card-body">
					<div class="text-center mt-n5 mb-4">
						<img
							class="rounded-circle p-1 border mt-n4 bg-white shadow"
							src="{{$profile->avatarUrl()}}"
							width="90"
							height="90"
							loading="lazy"
							onerror="this.src='/storage/avatars/default.jpg?v=0';this.onerror=null;">
					</div>
					<p class="text-center lead font-weight-bold mb-1">{{$profile->username}}</p>
					<p class="text-center text-muted small text-uppercase mb-4">{{$profile->followerCount()}} followers</p>
					<div class="d-flex justify-content-center">
					@if($following == true)
						<button
							id="unfollow"
							type="button"
							class="btn btn-outline-secondary btn-sm py-1 px-4 text-uppercase font-weight-bold mr-3"
							style="font-weight: 500"
							onclick="unfollowProfile()">
							Unfollow
						</button>
					@else
						<button
							id="follow"
							type="button"
							class="btn btn-primary btn-sm py-1 px-4 text-uppercase font-weight-bold mr-3"
							style="font-weight: 500"
							onclick="followProfile()">
							Follow
						</button>
					@endif
						<a class="btn btn-outline-primary btn-sm py-1 px-4 text-uppercase font-weight-bold" href="{{$profile->url()}}" style="font-weight: 500">View Profile</a>
					</div>
				</div>
			</div>
			@auth
			<div class="d-flex justify-content-between pt-4 small">
				<a class="text-lighter text-decoration-none" href="/{{$user->username}}">Logged in as: <span class="font-weight-bold text-muted">{{$user->username}}</span></a>
				<span>
					<a class="text-decoration-none text-muted font-weight-bold mr-3" href="/site/help">Help</a>
					<a class="text-decoration-none text-muted font-weight-bold" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout</a>
					<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
						@csrf
					</form>
				</span>
			</div>
			@endauth
		</div>
	</div>
</div>
@endsection

@push('scripts')
<script type="text/javascript">
	function followProfile() {
		let btn = document.querySelector('#follow');
		btn.setAttribute('disabled', 'disabled');
		axios.post('/api/v1/accounts/{{$profile->id}}/follow')
		.then(res => {
			setTimeout(() => location.reload(), 1000);
		})
		.catch(err => {
			location.href = '/login?next=' + encodeURI(location.href);
		})
	}

	function unfollowProfile() {
		let btn = document.querySelector('#unfollow');
		btn.setAttribute('disabled', 'disabled');
		axios.post('/api/v1/accounts/{{$profile->id}}/unfollow')
		.then(res => {
			setTimeout(() => location.reload(), 1000);
		})
		.catch(err => {
			location.href = '/login?next=' + encodeURI(location.href);
		})
	}

</script>
@endpush
